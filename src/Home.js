import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Toaster from './Toaster'
import Welcome from './Welcome'

function Home() {
  return (
    <>
      <Card className="text-center col-md-10 mx-auto my-3">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>This is Our Featured Item</Card.Title>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Button variant="primary">Click Here</Button>
        </Card.Body>
      </Card>
      <Toaster>
        <Welcome />
      </Toaster>
    </>
  )
}

export default Home

