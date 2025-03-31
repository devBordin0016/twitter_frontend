import {
  Container,
  InputPosting,
  SectionPosting,
  SelectContent
} from './styles'

const Posts = () => (
  <Container>
    <SelectContent>
      <button className="select-button" type="button">
        Para você
      </button>
      <button type="button">Seguindo</button>
    </SelectContent>
    <SectionPosting>
      <div>
        <span>J</span>
        <InputPosting>
          <input type="text" name="posting" id="posting" />
          <label htmlFor="posting">O que está acontecendo</label>
        </InputPosting>
      </div>
    </SectionPosting>
  </Container>
)

export default Posts
