import { useRef, useState } from 'react'
import {
  Container,
  Posting,
  Section,
  SelectPosts,
  SelectPostsWrapper
} from './styles'
import { colors, ProfileAvatar, ProfileName } from '../../styles'
import Button from '../Button'

const Posts = () => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [activeTab, setActiveTab] = useState<'forYou' | 'following'>('forYou')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    const textarea = textareaRef.current

    if (textarea) {
      textarea.style.height = '28px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }
  return (
    <Container>
      <SelectPostsWrapper>
        <SelectPosts>
          <button
            className={activeTab === 'forYou' ? 'select-button' : ''}
            type="button"
            onClick={() => setActiveTab('forYou')}
          >
            Para você
          </button>
          <button
            className={activeTab === 'following' ? 'select-button' : ''}
            type="button"
            onClick={() => setActiveTab('following')}
          >
            Seguindo
          </button>
        </SelectPosts>
      </SelectPostsWrapper>
      <Section>
        <div>
          <ProfileAvatar>W</ProfileAvatar>
        </div>
        <div className="text-width">
          <Posting>
            <textarea
              ref={textareaRef}
              onInput={handleChange}
              placeholder="O que está acontecendo?"
              maxLength={220}
            />
          </Posting>
          <Button
            type="button"
            bgColor={colors.black}
            title="Postar"
            textColor={colors.white}
            disabled={text.length < 1}
          >
            Postar
          </Button>
        </div>
      </Section>
      {activeTab === 'forYou' && (
        <ul>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  Mesmo que o caminho pareça difícil, continue. Grandes
                  conquistas exigem persistência, coragem e a confiança de que
                  tudo acontece no tempo certo.
                </p>
              </div>
            </Section>
          </li>
        </ul>
      )}
      {activeTab === 'following' && (
        <ul>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
          <li>
            <Section>
              <div>
                <ProfileAvatar>J</ProfileAvatar>
              </div>
              <div>
                <ProfileName>João Vítor Brito</ProfileName>
                <p>
                  A cada passo, uma chance de recomeçar. Não espere o momento
                  perfeito, faça o momento ser perfeito.
                </p>
              </div>
            </Section>
          </li>
        </ul>
      )}
    </Container>
  )
}

export default Posts
