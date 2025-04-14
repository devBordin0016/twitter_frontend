import {
  useFollowUserMutation,
  useGetAllUsersQuery,
  useGetCurrentUserQuery,
  useUnfollowUserMutation
} from '../../services/api'
import { colors, ProfileAvatar, ProfileName } from '../../styles'
import Button from '../Button'
import * as S from './styles'

import type { UserResponse } from '../../services/api'
import { getFirstLetterAndColor } from '../../utils'

const BarRight = () => {
  const { data: users = [] } = useGetAllUsersQuery()
  const { data: currentUser } = useGetCurrentUserQuery()
  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()

  const handleFollow = (user: UserResponse) => {
    if (user.is_following && user.follow_id) {
      unfollowUser(user.follow_id)
    } else {
      followUser({ following: user.id })
    }
  }

  const suggestedUsers = users.filter((user) => user.id !== currentUser?.id)

  return (
    <S.Container>
      <div>
        <S.BarSection>
          <S.TitleSection>Assine o Premium</S.TitleSection>
          <p>
            Assine para desbloquear novos recursos e, se elegível, receba uma
            parte da receita.
          </p>
          <Button
            title="Inscreva-se"
            bgColor={colors.blue}
            textColor={colors.white}
          >
            Inscreva-se
          </Button>
        </S.BarSection>

        <S.BarSection>
          <S.TitleSection>O que está acontecendo</S.TitleSection>
          <S.Trend>
            <span>Lynyrd Skynyd · Assuntos do momento</span>
            <h5>Free Bird</h5>
            <span>26,4 mil posts</span>
          </S.Trend>
          <S.Trend>
            <span>Air Supply · Assuntos do momento</span>
            <h5>All Out of Love</h5>
            <span>52,8 mil posts</span>
          </S.Trend>
          <S.Trend>
            <span>Eagles · Assuntos do momento</span>
            <h5>Hotel California</h5>
            <span>95,3 mil posts</span>
          </S.Trend>
        </S.BarSection>

        <S.BarSection>
          <S.TitleSection>Quem seguir</S.TitleSection>
          <S.ProfileList>
            {suggestedUsers.map((user) => {
              const { avatarColor, firstLetter } = getFirstLetterAndColor(
                user.username,
                user.id
              )

              return (
                <S.Profile key={`user-${user.id}`}>
                  <div>
                    <ProfileAvatar style={{ backgroundColor: avatarColor }}>
                      {firstLetter}
                    </ProfileAvatar>
                    <ProfileName>{user.username}</ProfileName>
                  </div>
                  <Button
                    title="Seguir"
                    bgColor={colors.black}
                    textColor={colors.white}
                    onClick={() => handleFollow(user)}
                  >
                    {user.is_following ? 'Seguindo' : 'Seguir'}
                  </Button>
                </S.Profile>
              )
            })}
          </S.ProfileList>
        </S.BarSection>
      </div>
    </S.Container>
  )
}

export default BarRight
