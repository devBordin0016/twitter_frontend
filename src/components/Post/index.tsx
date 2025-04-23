import { colors, MainContent, ProfileAvatar, ProfileName } from '../../styles'

import shareIcon from '../../assets/share.svg'
import heartIcon from '../../assets/heart.svg'
import heartIconRed from '../../assets/heartRed.svg'
import statisticIcon from '../../assets/statistic.svg'
import commentsIcon from '../../assets/comments.svg'
import arrow from '../../assets/arrow.svg'

import {
  Actions,
  Meta,
  FixedTop,
  InputComment,
  Section,
  Content
} from './styles'
import {
  useCreateCommentMutation,
  useGetCommentsQuery,
  useGetTweetQuery,
  useLikeTweetMutation
} from '../../services/api'
import { formatRelativeDate, getFirstLetterAndColor } from '../../utils'
import Button from '../Button'
import { useRef, useState } from 'react'
import UserAvatar from '../UserAvatar'
import { useNavigate, useParams } from 'react-router-dom'

const Post = () => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [likeTweet] = useLikeTweetMutation()
  const [createComment] = useCreateCommentMutation()
  const navigate = useNavigate()
  const handleLike = (tweetId: number) => {
    likeTweet(tweetId)
  }
  const { id } = useParams()
  const tweetId = Number(id)

  const { data: comments } = useGetCommentsQuery(tweetId || -1, {
    skip: !tweetId
  })
  const { data: tweet } = useGetTweetQuery(tweetId)

  if (!tweet) {
    return <p>Loading...</p>
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '28px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handlePostComment = () => {
    if (!text.trim()) return

    createComment({ tweetId: tweet.id, body: { content: text } })
      .unwrap()
      .then(() => {
        setText('')
        if (textareaRef.current) {
          textareaRef.current.style.height = '28px'
        }
      })
  }

  const tweetAvatar = getFirstLetterAndColor(tweet.username, tweet.user)

  return (
    <>
      <MainContent>
        <FixedTop>
          <img src={arrow} onClick={() => navigate('/feed')} alt="Voltar" />
          <p>Post</p>
        </FixedTop>
        <Content>
          <Section className="display align">
            <ProfileAvatar style={{ backgroundColor: tweetAvatar.avatarColor }}>
              {tweetAvatar.firstLetter}
            </ProfileAvatar>
            <ProfileName>{tweet.username}</ProfileName>
          </Section>
          <Section>
            <Meta>
              <p>{tweet.content}</p>
              <p className="date">{formatRelativeDate(tweet.created_at)}</p>
            </Meta>
          </Section>
          <Section>
            <Actions>
              <li>
                <img src={commentsIcon} alt="Comentários" />
                <span>{tweet.comments_count}</span>
              </li>
              <li>
                <img src={shareIcon} alt="Compartilhamentos" />
                <span>0</span>
              </li>
              <li>
                <img
                  onClick={() => handleLike(tweet.id)}
                  src={tweet.is_liked ? heartIconRed : heartIcon}
                  alt="Curtidas"
                />
                <span>{tweet.likes_count}</span>
              </li>
              <li>
                <img src={statisticIcon} alt="Visualizações" />
                <span>0</span>
              </li>
            </Actions>
          </Section>
          <Section className="display padding">
            <UserAvatar />
            <InputComment>
              <textarea
                ref={textareaRef}
                value={text}
                onInput={handleChange}
                placeholder="Postar sua resposta"
                maxLength={220}
              ></textarea>
              <Button
                onClick={handlePostComment}
                type="button"
                bgColor={colors.black}
                title="Responder"
                textColor={colors.white}
                disabled={text.length < 1}
              >
                Responder
              </Button>
            </InputComment>
          </Section>
        </Content>
        {comments?.map((comment) => {
          const { avatarColor, firstLetter } = getFirstLetterAndColor(
            tweet.username,
            tweet.user
          )
          return (
            <Content className="display" key={comment.id}>
              <Section className="padding-tp-bt">
                <ProfileAvatar style={{ backgroundColor: avatarColor }}>
                  {firstLetter}
                </ProfileAvatar>
              </Section>
              <Section className="padding-tp-bt">
                <div className="display">
                  <ProfileName>{comment.username}</ProfileName>
                  <p className="date">
                    {'· ' + formatRelativeDate(comment.created_at)}
                  </p>
                </div>
                <p className="padding-left">{comment.content}</p>
              </Section>
            </Content>
          )
        })}
      </MainContent>
    </>
  )
}
export default Post
