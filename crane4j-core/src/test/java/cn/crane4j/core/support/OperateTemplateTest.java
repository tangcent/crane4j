package cn.crane4j.core.support;

import cn.crane4j.annotation.Assemble;
import cn.crane4j.annotation.Disassemble;
import cn.crane4j.annotation.Mapping;
import cn.crane4j.core.container.ImmutableMapContainer;
import cn.crane4j.core.executor.BeanOperationExecutor;
import cn.crane4j.core.executor.DisorderedBeanOperationExecutor;
import cn.crane4j.core.parser.BeanOperationParser;
import cn.crane4j.core.parser.BeanOperations;
import cn.crane4j.core.parser.operation.AssembleOperation;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.*;

/**
 * test for {@link OperateTemplate}
 *
 * @author huangchengxing
 */

public class OperateTemplateTest {

    private BeanOperationParser parser;
    private BeanOperationExecutor beanOperationExecutor;
    private OperateTemplate template;

    @Before
    public void init() {
        SimpleCrane4jGlobalConfiguration configuration = SimpleCrane4jGlobalConfiguration.create();
        parser = configuration.getBeanOperationsParser(BeanOperationParser.class);
        beanOperationExecutor = new DisorderedBeanOperationExecutor(configuration);
        template = new OperateTemplate(
            configuration.getBeanOperationsParser(BeanOperationParser.class),
            beanOperationExecutor, configuration.getTypeResolver()
        );

        Map<String, String> sources = new HashMap<>();
        sources.put("1", "1");
        sources.put("2", "2");
        sources.put("3", "3");
        configuration.registerContainer(ImmutableMapContainer.forMap("test", sources));

    }

    @Test
    public void test() {
        List<Foo> fooList = getFooList();
        template.execute(fooList);
        checkBean(fooList.get(0), "1", "1", "1");

        fooList = getFooList();
        template.execute(fooList, Foo.class);
        checkBean(fooList.get(0), "1", "1", "1");

        fooList = getFooList();
        template.execute(fooList, op -> op instanceof AssembleOperation);
        checkBean(fooList.get(0), "1", null, null);

        fooList = getFooList();
        template.execute(fooList, beanOperationExecutor, op -> op instanceof AssembleOperation);
        checkBean(fooList.get(0), "1", null, null);

        fooList = getFooList();
        template.executeIfMatchAnyGroups(fooList, "nested");
        checkBean(fooList.get(0), null, "1", "1");

        fooList = getFooList();
        template.executeIfNoneMatchAnyGroups(fooList, "id");
        checkBean(fooList.get(0), null, null, "1");

        fooList = getFooList();
        template.executeIfMatchAllGroups(fooList, "id");
        checkBean(fooList.get(0), "1", null, null);

        BeanOperations beanOperations = parser.parse(Foo.class);
        fooList = getFooList();
        template.execute(Collections.emptyList(), beanOperations);
        template.execute(null, beanOperations, op -> op instanceof AssembleOperation);
        template.execute(fooList, beanOperations, op -> op instanceof AssembleOperation);
        checkBean(fooList.get(0), "1", null, null);

        fooList = getFooList();
        template.execute(fooList, beanOperations);
        checkBean(fooList.get(0), "1", "1", "1");
    }

    private static void checkBean(Foo foo, String name, String nestedName, String value) {
        Assert.assertEquals(foo.getName(), name);
        Assert.assertEquals(((NestedFoo) foo.getNestedFoo()).getName(), nestedName);
        Assert.assertEquals(((NestedFoo) foo.getNestedFoo()).getValue(), value);
    }

    private static List<Foo> getFooList() {
        return Arrays.asList(
            new Foo("1", new NestedFoo("1", "1")),
            new Foo("2", new NestedFoo("2", "2"))
        );
    }

    @RequiredArgsConstructor
    @Data
    private static class Foo {
        @Assemble(container = "test", groups = "id", props = @Mapping(ref = "name"))
        private final String id;
        private String name;
        @Disassemble(groups = {"nested", "nestedFoo"})
        private final Object nestedFoo;
    }

    @RequiredArgsConstructor
    @Data
    private static class NestedFoo {
        @Assemble(container = "test", groups = {"nested", "id"}, props = @Mapping(ref = "name"), sort = 1)
        private final String id;
        private String name;
        @Assemble(
            container = "test", props = @Mapping(ref = "value"), groups = {"nested", "key"}, sort = 2
        )
        private final String key;
        private String value;
    }
}
