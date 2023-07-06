import { useForm } from '@mantine/form'
import { useMemo, useState } from 'react'

export default function useBeshiefy () {
  const [beshiefiedMessage, setBeshiefiedMessage] = useState<string>('')

  const form = useForm({
    initialValues: {
      message: ''
    },

    validate: {
      message: value => (value.length < 2 ? 'Mag type ka naman beshie' : null)
    }
  })

  return {
    form,
    beshiefiedMessage,
    onSubmit: useMemo(() => {
      return form.onSubmit(async data => {
        setBeshiefiedMessage(data.message.split(' ').join(' 🤸 '))
      })
    }, [form])
  }
}
