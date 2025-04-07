import { colors, ProfileAvatar, ProfileName } from '../../styles'
import Button from '../Button'
import {
  BarSection,
  Container,
  Profile,
  ProfileList,
  TitleSection,
  Trend
} from './styles'

const BarRight = () => (
  <Container>
    <div>
      <BarSection>
        <TitleSection>Assine o Premium</TitleSection>
        <p>
          Assine para desbloquear novos recursos e, se elegível, receba uma
          parte da receita.
        </p>
        <Button
          type="link"
          bgColor={colors.blue}
          title="inscrever-se"
          textColor={colors.white}
        >
          Inscreva-se
        </Button>
      </BarSection>
      <BarSection>
        <TitleSection>O que está acontecendo</TitleSection>
        <Trend>
          <span>Lynyrd Skynyd · Assuntos do momento </span>
          <h5>Free Bird</h5>
          <span>26,4 mil posts</span>
        </Trend>
        <Trend>
          <span>Air Supply · Assuntos do momento </span>
          <h5>All Out of Love</h5>
          <span>52,8 mil posts</span>
        </Trend>
        <Trend>
          <span>Panda Eyes · Assuntos do momento </span>
          <h5>Take My Hand</h5>
          <span>95,3 mil posts</span>
        </Trend>
      </BarSection>
      <BarSection>
        <TitleSection>Quem seguir</TitleSection>
        <ProfileList>
          <Profile>
            <div>
              <ProfileAvatar>A</ProfileAvatar>
              <ProfileName>Ana Beatrys</ProfileName>
            </div>
            <Button
              type="button"
              bgColor={colors.black}
              title="seguir"
              textColor={colors.white}
            >
              Seguir
            </Button>
          </Profile>
          <Profile>
            <div>
              <ProfileAvatar>J</ProfileAvatar>
              <ProfileName>João Vítor Vitor</ProfileName>
            </div>
            <Button
              type="button"
              bgColor={colors.black}
              title="seguir"
              textColor={colors.white}
            >
              Seguir
            </Button>
          </Profile>
          <Profile>
            <div>
              <ProfileAvatar>J</ProfileAvatar>
              <ProfileName>João Vítor Vitor</ProfileName>
            </div>
            <Button
              type="button"
              bgColor={colors.black}
              title="seguir"
              textColor={colors.white}
            >
              Seguir
            </Button>
          </Profile>
          <Profile>
            <div>
              <ProfileAvatar>A</ProfileAvatar>
              <ProfileName>Ana Beatrys</ProfileName>
            </div>
            <Button
              type="button"
              bgColor={colors.black}
              title="seguir"
              textColor={colors.white}
            >
              Seguir
            </Button>
          </Profile>
          <Profile>
            <div>
              <ProfileAvatar>A</ProfileAvatar>
              <ProfileName>Ana Beatrys</ProfileName>
            </div>
            <Button
              type="button"
              bgColor={colors.black}
              title="seguir"
              textColor={colors.white}
            >
              Seguir
            </Button>
          </Profile>
          <Profile>
            <div>
              <ProfileAvatar>A</ProfileAvatar>
              <ProfileName>Ana Beatrys</ProfileName>
            </div>
            <Button
              type="button"
              bgColor={colors.black}
              title="seguir"
              textColor={colors.white}
            >
              Seguir
            </Button>
          </Profile>
        </ProfileList>
      </BarSection>
    </div>
  </Container>
)

export default BarRight
