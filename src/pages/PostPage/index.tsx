import { useEffect, useState } from 'react'
import BarLeft from '../../components/BarLeft'
import BarRight from '../../components/BarRight'
import Loader from '../../components/Loader'
import Post from '../../components/Post'
import { useGetCurrentUserQuery } from '../../services/api'
import { Container, MainContainer } from '../Feed/styles'

const PostPage = () => {
  0
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
        <Loader />
      ) : (
        <Container>
          <BarLeft />
          <MainContainer>
            <Post />
            <BarRight />
          </MainContainer>
        </Container>
      )}
    </>
  )
}

export default PostPage
