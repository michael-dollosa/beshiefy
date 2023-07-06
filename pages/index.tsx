import useBeshiefy from '@/hooks'
import {
  Box,
  Button,
  Center,
  Container,
  CopyButton,
  Footer,
  Text,
  TextInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useState } from 'react'

export default function Home () {
  const { form, onSubmit, beshiefiedMessage } = useBeshiefy()

  return (
    <>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            height: '90vh',
            width: '100vw',
            padding: '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <Box sx={{ padding: '3rem' }}>
            <Text ff='Montserrat' size='3rem' fw='600' align='center'>
              🤸 Beshiefy 🤸
            </Text>
          </Box>

          <TextInput
            size='lg'
            {...form.getInputProps('message')}
            rightSection={
              <Button type='submit' size='lg' variant='filled' color='pink'>
                🤸 Beshiefy 🤸
              </Button>
            }
          />
          <Box
            sx={{
              padding: '3rem',
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <Text size='lg' align='center' ff='Inter'>
              {beshiefiedMessage}
            </Text>
            <CopyButton value={beshiefiedMessage}>
              {({ copied, copy }) => (
                <Button
                  variant='outline'
                  color={copied ? 'pink' : 'dark'}
                  onClick={copy}
                >
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              )}
            </CopyButton>
          </Box>
        </Box>
      </form>
      <Footer
        styles={{
          root: {
            borderTop: 'none'
          }
        }}
        height={5}
      >
        <Text align='center'>© Dolee</Text>
      </Footer>
    </>
  )
}
