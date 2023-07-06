import { useForm } from '@mantine/form'
import { useCallback, useMemo, useState } from 'react'

export default function useBeshiefy () {
  const [beshiefiedMessage, setBeshiefiedMessage] = useState('')

  const form = useForm({
    initialValues: {
      message: ''
    },

    validate: {
      message: value => (value.length < 1 ? 'Mag type ka naman beshie' : null)
    }
  })

  return {
    form,
    beshiefiedMessage,
    onSubmit: useMemo(() => {
      return form.onSubmit(async data => {
        console.log('form submit', data)
        setBeshiefiedMessage(data.message.split(' ').join(' 🤸 '))
      })
    }, [form])
  }
}
