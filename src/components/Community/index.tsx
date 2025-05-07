import {
  useFollowUserMutation,
  useGetAllUsersQuery,
  useUnfollowUserMutation
} from '../../services/user.api'
import { useGetCurrentUserQuery } from '../../services/auth.api'

import { ProfileAvatar, ProfileName, colors } from '../../styles'
import Button from '../Button'
import * as S from './styles'

import type { UserResponse } from '../../services/user.api'
import { getFirstLetterAndColor } from '../../utils'

const Community = () => {
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
      <S.TitleSection>Comunidade</S.TitleSection>
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
                title={user.is_following ? 'Seguindo' : 'Seguir'}
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
    </S.Container>
  )
}

export default Community
