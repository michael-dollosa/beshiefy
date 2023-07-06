import useBeshiefy from '@/hooks'
import {
  Anchor,
  Box,
  Button,
  CopyButton,
  Footer,
  Text,
  TextInput
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export default function Home () {
  const { form, onSubmit, beshiefiedMessage } = useBeshiefy()
  const viewport = useMediaQuery('(max-width: 600px)')
  return (
    <>
      <form onSubmit={onSubmit}>
        <Box
          sx={{
            height: '90vh',
            width: '100vw',
            padding: viewport ? '1rem' : '5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center'
          }}
        >
          <Box sx={{ padding: '3rem' }}>
            <Text
              ff='Montserrat'
              size={viewport ? '2rem' : '3rem'}
              fw='800'
              align='center'
            >
              🤸 Beshiefy 🤸
            </Text>
          </Box>

          <TextInput
            size={viewport ? 'sm' : 'lg'}
            {...form.getInputProps('message')}
            rightSection={
              <Button
                type='submit'
                size={viewport ? 'sm' : 'lg'}
                variant='filled'
                color='pink'
              >
                🤸
              </Button>
            }
          />
          {beshiefiedMessage.length > 1 && (
            <Box
              sx={{
                padding: '3rem',
                display: 'flex',
                flexDirection: viewport ? 'column' : 'row',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <Text size={viewport ? 'sm' : 'lg'} align='center' ff='Inter'>
                {beshiefiedMessage}
              </Text>
              <CopyButton value={beshiefiedMessage}>
                {({ copied, copy }) => (
                  <Button
                    size={viewport ? 'sm' : 'md'}
                    variant='outline'
                    color={copied ? 'pink' : 'dark'}
                    onClick={copy}
                    radius='sm'
                  >
                    {copied ? 'Copied' : 'Copy'}
                  </Button>
                )}
              </CopyButton>
            </Box>
          )}
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
        <Text align='center'>
          ©{' '}
          <Anchor
            href='https://www.linkedin.com/in/michaeldollosa/'
            target='_blank'
            color='dark'
          >
            Dolee
          </Anchor>
        </Text>
      </Footer>
    </>
  )
}
