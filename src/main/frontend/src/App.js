import React from 'react';
import './App.css';
import { Card, CardHeader, CardBody, CardFooter, Text, SimpleGrid, Heading, Button } from '@chakra-ui/react'

function App() {
  return (
    <div className="App"><SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
      <Card align='center'>
        <CardHeader>
          <Heading size='md'> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
    </div>
  );
}

export default App;
