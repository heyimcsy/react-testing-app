import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  //render함수 DOM에 컴포넌트를 랜더링하는 함수
  //인자로 랜더링할 React 컴포넌트가 들어감
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()

  const lintTest = screen.getAllByRole('button', {
    name: 'lintTest',
  })
  expect(lintTest).toHaveTextContent('lineTest')
})
