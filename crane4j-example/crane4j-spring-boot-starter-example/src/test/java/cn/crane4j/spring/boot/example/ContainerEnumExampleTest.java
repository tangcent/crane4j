package cn.crane4j.spring.boot.example;

import cn.crane4j.annotation.Assemble;
import cn.crane4j.annotation.ContainerEnum;
import cn.crane4j.annotation.Mapping;
import cn.crane4j.core.container.Containers;
import cn.crane4j.core.support.AnnotationFinder;
import cn.crane4j.core.support.OperateTemplate;
import cn.crane4j.core.support.reflect.PropertyOperator;
import cn.crane4j.extension.spring.Crane4jApplicationContext;
import lombok.Data;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

/**
 * 演示如何使用枚举容器
 *
 * @author huangchengxing
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = {Crane4jSpringBootStarterExampleApplication.class})
public class ContainerEnumExampleTest {

    @Autowired
    private Crane4jApplicationContext context;
    @Autowired
    private PropertyOperator propertyOperator;
    @Autowired
    private AnnotationFinder annotationFinder;
    @Autowired
    private OperateTemplate operateTemplate;

    @Before
    public void init() {
        // 手动指定key为code属性，而value直接为枚举项本身
        if (!context.containsContainer("sex")) {
            context.registerContainer("sex", () -> Containers.forEnum("sex", Sex.class, Sex::getCode));
        }
        // 通过注解，配置了key为code属性，而value为name属性
        if (!context.containsContainer("gender")) {
            context.registerContainer("gender", () -> Containers.forEnum(Gender.class, annotationFinder, propertyOperator));
        }
    }

    @Test
    public void test() {
        List<StudentVO> students = IntStream.rangeClosed(0, 4)
            .mapToObj(i -> new StudentVO(i, (i & 1) == 0 ? 0 : 1))
            .collect(Collectors.toList());
        operateTemplate.execute(students, StudentVO.class);
        for (int i = 0; i < students.size(); i++) {
            String value = (i & 1) == 0 ? "女" : "男";
            StudentVO studentVO = students.get(i);
            Assert.assertEquals(value, studentVO.getGenderName());
            Assert.assertEquals(value, studentVO.getSexName());
            System.out.println(studentVO);
        }
    }

    @ContainerEnum(namespace = "gender", key = "code", value = "name")
    @Getter
    @RequiredArgsConstructor
    private enum Gender {
        FEMALE(0, "女"), MALE(1, "男");
        private final Integer code;
        private final String name;
    }

    @Getter
    @RequiredArgsConstructor
    private enum Sex {
        FEMALE(0, "女"), MALE(1, "男");
        private final Integer code;
        private final String name;
    }


    @RequiredArgsConstructor
    @Data
    private static class StudentVO {
        private final Integer id;
        @Assemble(container = "gender", props = @Mapping(ref = "genderName"))
        @Assemble(container = "sex", props = @Mapping(src = "name", ref = "sexName"))
        private final Integer sex;
        private String sexName;
        private String genderName;
    }
}
