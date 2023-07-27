package cn.crane4j.core.container;

import cn.crane4j.annotation.ContainerEnum;
import cn.crane4j.core.support.AnnotationFinder;
import cn.crane4j.core.support.DataProvider;
import cn.crane4j.core.support.reflect.PropertyOperator;

import java.util.Map;
import java.util.function.Function;

/**
 * A utility class for creating containers from various data sources.
 *
 * @author tangcent
 */
public class Containers {

    /**
     * <p>Get an empty data source container.<br />
     * When an assembly operation specifies to use the data source container,
     * the operation object itself will be used as the data source object.
     *
     * @return container
     * @see EmptyContainer
     */
    public static <K> Container<K> empty() {
        return Container.empty();
    }

    /**
     * Creates an immutable container from public static constants in the specified class.
     *
     * @param constantClass    the class whose constants should be converted to a container
     * @param annotationFinder used to find annotations in the class
     * @return a container representing the class's constants
     */
    public static Container<Object> forConstantClass(Class<?> constantClass, AnnotationFinder annotationFinder) {
        return ConstantContainerBuilder.of(constantClass)
            .annotationFinder(annotationFinder)
            .build();
    }

    /**
     * Creates an immutable container from a specified enumeration type and key getter function.
     *
     * @param namespace namespace
     * @param enumType  enum type
     * @param keyGetter method to obtain the corresponding key value from the enumeration comparator
     * @param <K>       key type
     * @param <T>       enumeration type
     * @return container
     * @see EnumContainerBuilder
     */
    public static <K, T extends Enum<?>> Container<K> forEnum(String namespace, Class<T> enumType, Function<? super T, K> keyGetter) {
        return EnumContainerBuilder.of(enumType)
            .namespace(namespace)
            .keyGetter(keyGetter)
            .build();
    }

    /**
     * Creates an immutable container from a specified enumeration type and a {@link ContainerEnum} annotation.
     *
     * @param enumType         enum type
     * @param annotationFinder annotation finder
     * @param propertyOperator property operator
     * @param <K>              key type
     * @return container
     * @see EnumContainerBuilder
     */
    @SuppressWarnings("unchecked")
    public static <K> Container<K> forEnum(Class<? extends Enum<?>> enumType, AnnotationFinder annotationFinder, PropertyOperator propertyOperator) {
        return (Container<K>) EnumContainerBuilder.of(enumType)
            .annotationFinder(annotationFinder)
            .propertyOperator(propertyOperator)
            .build();
    }

    /**
     * <p>Create a key-value pair container based on the specified type enumeration.<br />
     * The key value is the enumeration attribute value obtained by {@code keyGetter}.
     *
     * @param namespace namespace
     * @param data      data source objects grouped by key value
     * @param <K>       key type
     * @return container
     */
    public static <K> ImmutableMapContainer<K> forMap(String namespace, Map<K, ?> data) {
        return ImmutableMapContainer.forMap(namespace, data);
    }

    /**
     * Build a data source container based on an input key set
     * and an expression that returns data sources grouped by key.
     *
     * @param namespace namespace
     * @param lambda    lambda expression
     * @param <K>       key type
     * @return container
     */
    public static <K> LambdaContainer<K> forLambda(String namespace, DataProvider<K, ?> lambda) {
        return LambdaContainer.forLambda(namespace, lambda);
    }
}
