
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Header,
  Icon,
  Segment,
} from 'semantic-ui-react'

const Homepage = (props) => {
  useEffect(() => {
    console.log(props)
  }, [])
  return (
  <>
  <Segment inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical>
    <Container text>
      <Header
        as='h1'
        content='Farmage'
        inverted
        style={{
          fontSize: '6em',
          fontWeight: 600,
          marginBottom: 0,
          marginTop: '2em',
        }}
      />
      <Header
        as='h2'
        content='Keeping your fields organized.'
        inverted
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          marginTop: '1em',
          marginBottom: '1em'
        }}
      />
      { props.user ? 
        <Link>
          <Link to='/fields'>
            <Button color='teal' size='huge'>
              Go to your fields
            </Button>
          </Link>
        </Link> : 
        <> 
          <Link to='/sign_in'>
            <Button color='teal' size='huge'>
              Log in
            </Button>
          </Link>
          <Link to='/sign_up'>
            <Button color='teal' size='huge'>
              Get Started
              <Icon name='right arrow' />
            </Button>
          </Link>
        </>
      }
    </Container>
  </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          This project's stack
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          This is a little hobby project, where I'm experimenting with <b>React, Semantic UI, Ruby on Rails, PostgreSQL and PostGIS</b>.
        </p>

      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Header as='h4' inverted>
        Created by Manuel Gonzalez
        </Header>
        <p>
          Visit my <a href="https://www.linkedin.com/in/manueloglez/">LinkedIn account</a> or my <a href="https://github.com/manueloglez">Github page</a>.
        </p>
      </Container>
    </Segment>
  </>
)}

export default Homepage