import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;

  left: 1rem;
  top: 1rem;
`

const Logo = () => {
  return (
    <Container>
      <Image src="/sheep.png" alt="baah" width="48" height="48" />
    </Container>
  )
}

export default Logo
