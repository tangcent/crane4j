package cn.crane4j.core.container;

import cn.crane4j.annotation.ContainerEnum;
import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.Collection;
import java.util.Map;
import java.util.Objects;

/**
 * <p>A container that stores key-value pairs.
 *
 * <p>Supports the following factory methods to create containers:
 * <ul>
 *     <li>{@link #forMap}: key-value pairs in the specified map;</li>
 * </ul>
 * this method also supports configuration through annotations.
 *
 * <p>for performance reasons, when get data from container,
 * it always returns all data which set in the creation time.
 * and data will not be updated after the container is created.
 *
 * @param <K> key type
 * @author tangcent
 * @see ContainerEnum
 */
@EqualsAndHashCode
@RequiredArgsConstructor(access = AccessLevel.PRIVATE)
public class ImmutableMapContainer<K> implements Container<K>, Container.Lifecycle {

    /**
     * namespace of the data source container,
     */
    @Getter
    private final String namespace;

    /**
     * data source objects grouped by key value
     */
    private final Map<K, ?> data;

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
        Objects.requireNonNull(namespace);
        return new ImmutableMapContainer<>(namespace, data);
    }

    /**
     * Enter a batch of key values to return data source objects grouped by key values.
     *
     * @param keys keys
     * @return data source objects grouped by key value
     */
    @Override
    public Map<K, ?> get(Collection<K> keys) {
        return data;
    }

    /**
     * Destroy the container
     */
    @Override
    public void destroy() {
        try {
            data.clear();
        } catch (UnsupportedOperationException ex) {
            // ignore if map is immutable
        }
    }
}
