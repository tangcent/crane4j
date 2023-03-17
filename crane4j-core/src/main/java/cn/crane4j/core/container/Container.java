package cn.crane4j.core.container;

import cn.crane4j.core.support.callback.ContainerRegisterAware;

import java.util.Collection;
import java.util.Map;

/**
 * <p>The source container used to store the provided data objects.<br />
 * The data source that can be used to complete the assembly operation.
 * Any Map set object method that can accept the key value set
 * and return grouping by key value can be used as a data source.
 *
 * <p>Containers are typically created and initialized at application startup,
 * and then manually or automatically registered to the specified {@link ContainerProvider}
 * (this stage will trigger a callback for {@link ContainerRegisterAware}).
 * Once everything is ready, containers can be retrieved from
 * the cache through {@link ContainerProvider#getContainer}.
 *
 * @author huangchengxing
 * @param <K> key type
 * @see ContainerRegisterAware
 * @see ContainerProvider
 * @see ConstantContainer
 * @see LambdaContainer
 * @see MethodInvokerContainer
 * @see EmptyContainer
 * @see CacheableContainer
 */
public interface Container<K> {

    /**
     * <p>Get an empty data source container.<br />
     * When an assembly operation specifies to use the data source container,
     * the operation object itself will be used as the data source object.
     *
     * @return container
     * @see EmptyContainer
     */
    @SuppressWarnings("unchecked")
    static <K> Container<K> empty() {
        return (Container<K>)EmptyContainer.INSTANCE;
    }

    /**
     * Gets the namespace of the data source container,
     * which should be globally unique.
     *
     * @return namespace
     */
    String getNamespace();

    /**
     * Enter a batch of key values to return data source objects grouped by key values.
     *
     * @param keys keys
     * @return data source objects grouped by key value
     */
    Map<K, ?> get(Collection<K> keys);
}
