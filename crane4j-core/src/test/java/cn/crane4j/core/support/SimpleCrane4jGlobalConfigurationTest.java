package cn.crane4j.core.support;

import cn.crane4j.core.container.Container;
import cn.crane4j.core.container.LambdaContainer;
import cn.crane4j.core.exception.Crane4jException;
import cn.crane4j.core.executor.BeanOperationExecutor;
import cn.crane4j.core.executor.DisorderedBeanOperationExecutor;
import cn.crane4j.core.executor.handler.AssembleOperationHandler;
import cn.crane4j.core.executor.handler.DisassembleOperationHandler;
import cn.crane4j.core.executor.handler.ManyToManyReflexAssembleOperationHandler;
import cn.crane4j.core.executor.handler.ReflectDisassembleOperationHandler;
import cn.crane4j.core.parser.AssembleAnnotationResolver;
import cn.crane4j.core.parser.BeanOperationParser;
import cn.crane4j.core.parser.OperationAnnotationResolver;
import cn.crane4j.core.parser.TypeHierarchyBeanOperationParser;
import cn.crane4j.core.support.callback.ContainerRegisterAware;
import cn.crane4j.core.support.reflect.ReflectPropertyOperator;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.Collection;
import java.util.Collections;

/**
 * test for {@link SimpleCrane4jGlobalConfiguration}
 *
 * @author huangchengxing
 */
public class SimpleCrane4jGlobalConfigurationTest {

    private final SimpleCrane4jGlobalConfiguration configuration = SimpleCrane4jGlobalConfiguration.create(Collections.emptyMap());

    @Before
    public void init() {
        configuration.registerContainer(LambdaContainer.forLambda("test", ids -> Collections.emptyMap()));
        configuration.setTypeResolver(new SimpleTypeResolver());
        configuration.setPropertyOperator(new ReflectPropertyOperator());

        DisorderedBeanOperationExecutor executor = new DisorderedBeanOperationExecutor();
        configuration.getBeanOperationExecutorMap().put(executor.getClass().getName(), executor);
        configuration.getBeanOperationExecutorMap().put(BeanOperationExecutor.class.getName(), executor);

        OperationAnnotationResolver resolver = new AssembleAnnotationResolver(new SimpleAnnotationFinder(), configuration);
        BeanOperationParser parser = new TypeHierarchyBeanOperationParser(Collections.singletonList(resolver));
        configuration.getBeanOperationParserMap().put(parser.getClass().getName(), parser);
        configuration.getBeanOperationParserMap().put(BeanOperationParser.class.getName(), parser);

        ManyToManyReflexAssembleOperationHandler assembleOperationHandler = new ManyToManyReflexAssembleOperationHandler(new ReflectPropertyOperator());
        configuration.getAssembleOperationHandlerMap().put(assembleOperationHandler.getClass().getName(), assembleOperationHandler);
        configuration.getAssembleOperationHandlerMap().put(AssembleOperationHandler.class.getName(), assembleOperationHandler);

        ReflectDisassembleOperationHandler disassembleOperationHandler = new ReflectDisassembleOperationHandler(new ReflectPropertyOperator());
        configuration.getDisassembleOperationHandlerMap().put(disassembleOperationHandler.getClass().getName(), disassembleOperationHandler);
        configuration.getDisassembleOperationHandlerMap().put(DisassembleOperationHandler.class.getName(), disassembleOperationHandler);

        configuration.getContainerProviderMap().put(configuration.getClass().getName(), configuration);
    }

    @Test
    public void addContainerRegisterAware() {
        Collection<ContainerRegisterAware> awareList = configuration.getContainerRegisterAwareList();
        int size = awareList.size();
        ContainerRegisterAware aware = new ContainerRegisterAware() { };
        configuration.addContainerRegisterAware(aware);
        Assert.assertEquals(size + 1, awareList.size());
        configuration.addContainerRegisterAware(aware);
        Assert.assertEquals(size + 1, awareList.size());
    }

    @Test
    public void testContainerApi() {
        Assert.assertTrue(configuration.containsContainer("test"));
        Assert.assertFalse(configuration.containsContainer("no registered"));

        Assert.assertFalse(configuration.containsContainer("test register"));
        configuration.registerContainer(LambdaContainer.forLambda("test register", ids -> Collections.emptyMap()));
        Assert.assertTrue(configuration.containsContainer("test register"));

        Assert.assertFalse(configuration.containsContainer("no registered"));
        Container<?> container1 = configuration.compute("no registered", container -> {
            Assert.assertNull(container);
            return LambdaContainer.forLambda("no registered", ids -> Collections.emptyMap());
        });
        Assert.assertNull(container1);
        Assert.assertTrue(configuration.containsContainer("no registered"));

        Container<?> container2 = configuration.compute("no registered", container -> {
            Assert.assertNotNull(container);
            return null;
        });
        Assert.assertNotNull(container2);
        Assert.assertFalse(configuration.containsContainer("no registered"));
    }

    @Test
    public void getContainerProvider() {
        Assert.assertSame(configuration, configuration.getContainerProvider(configuration.getClass()));
        Assert.assertSame(configuration, configuration.getContainerProvider(configuration.getClass().getName()));
    }

    @Test
    public void getPropertyOperator() {
        Assert.assertNotNull(configuration.getPropertyOperator());
    }

    @Test
    public void getTypeResolver() {
        Assert.assertNotNull(configuration.getTypeResolver());
    }

    @Test
    public void getContainer() {
        Assert.assertThrows(Crane4jException.class, () -> configuration.getContainer("not found container"));
        Assert.assertNotNull(configuration.getContainer("test"));
    }

    @Test
    public void getBeanOperationsParser() {
        Assert.assertNotNull(configuration.getBeanOperationsParser(TypeHierarchyBeanOperationParser.class));
    }

    @Test
    public void getAssembleOperationHandler() {
        Assert.assertNotNull(configuration.getAssembleOperationHandler(ManyToManyReflexAssembleOperationHandler.class));
    }

    @Test
    public void getGetBeanOperationExecutor() {
        Assert.assertNotNull(configuration.getBeanOperationExecutor(DisorderedBeanOperationExecutor.class));
    }

    @Test
    public void getDisassembleOperationHandler() {
        Assert.assertNotNull(configuration.getDisassembleOperationHandler(ReflectDisassembleOperationHandler.class));
    }
}
