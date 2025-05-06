import { useEffect, useState } from 'react'
import BarLeft from '../../components/BarLeft'
import BarRight from '../../components/BarRight'
import { Loader1 } from '../../components/Loaders'
import Post from '../../components/Post'
import { useGetCommentsQuery } from '../../services/comment.api'
import { Container, MainContainer } from '../Feed/styles'
import { useParams } from 'react-router-dom'

const PostPage = () => {
  const { id } = useParams()
  const tweetId = Number(id)

  const { isLoading } = useGetCommentsQuery(tweetId || -1, {
    skip: !tweetId
  })

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
            <Post />
            <BarRight />
          </MainContainer>
        </Container>
      )}
    </>
  )
}

export default PostPage
