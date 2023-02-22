package cn.crane4j.core.parser;

import cn.crane4j.core.executor.handler.DisassembleOperationHandler;

import javax.annotation.Nonnull;

/**
 * <p>The disassembly operation triggered by the specified key,
 * it's means that a set of process configuration information of
 * the nested object in the target object attribute is obtained
 * according to the specified key value.
 *
 * @author huangchengxing
 * @see TypeFixedDisassembleOperation
 * @see TypeDynamitedDisassembleOperation
 */
public interface DisassembleOperation extends KeyTriggerOperation {

    /**
     * Gets the type of the source object where the currently pending nested object is located.
     *
     * @return type
     */
    Class<?> getSourceType();

    /**
     * Get the operation configuration of nested object.
     *
     * @param internalBean internal bean
     * @return operation
     */
    @Nonnull
    BeanOperations getInternalBeanOperations(Object internalBean);

    /**
     * Get the handler of the current disassembly operation.
     *
     * @return handler
     */
    DisassembleOperationHandler getDisassembleOperationHandler();
}
