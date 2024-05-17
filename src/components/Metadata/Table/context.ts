import { provide } from 'vue'
import { TableProps } from 'ant-design-vue/lib/table'

type FiledExpose = {

}

const FormContextKey = 'form-context'
export const useFormContext = (options: Record<string, any>) => {
    provide(FormContextKey, options)
}

export const useInjectForm = () => {
    return inject(FormContextKey, {
        addField: (key: string, field: FiledExpose) => {},
        dataSource: computed(() => []),
        rules: computed(() => undefined),
    })
}
