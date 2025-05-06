import { useEffect, useState } from 'react'
import { useGetCurrentUserQuery } from '../../services/auth.api'
import BarLeft from '../../components/BarLeft'
import BarRight from '../../components/BarRight'
import Posts from '../../components/Posts'
import { Loader1 } from '../../components/Loaders'
import { Container, MainContainer } from './styles'

const Feed = () => {
  const { isLoading } = useGetCurrentUserQuery()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (!isLoading) {
      timeout = setTimeout(() => {
        setShowLoader(false)
      }, 2000)
    } else {
      setShowLoader(true)
    }

    return () => clearTimeout(timeout)
  }, [isLoading])

  return (
    <>
      {showLoader ? (
        <Loader1 />
      ) : (
        <Container>
          <BarLeft />
          <MainContainer>
            <Posts />
            <BarRight />
          </MainContainer>
        </Container>
      )}
    </>
  )
}

export default Feed
