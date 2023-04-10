

import React, { useEffect, useState } from "react";
import { Flex, Button, Text, useColorMode, Box, Image, Heading, Divider, useDisclosure, Modal, ModalOverlay, ModalContent, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";


import "../rocket.svg"
import { signInWithGoogle } from "./Firebase";
import axios from "axios";
import Ideas from "./Ideas";
import "../components/Landing.css";
import "../App.css"
import { Paper } from "@mui/material";

const Landing = () => {
  const [ideas, setIdeas] = useState([]);
  const [ query, setQuery] = useState("")
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue('red.500', 'red.200')
  const color = useColorModeValue('white', 'gray.800')

  useEffect(() => {
    getideas()
  })
  const getideas = async() => {

  const res = await axios.get(`http://localhost:8080/api/ideas/get-all`);
        setIdeas(res.data)
  }
  return (
    <>
    <Flex
      as="header"
      position="fixed"
      top={0}
      right={0}
      // left={0}
      zIndex={1}
      p="5"
      bg={`mode.${colorMode}.header`}
      justify="space-between"
      align="center"
    >
      <Flex>
        <Button
          size="md"
          leftIcon={<CgDarkMode />}
          onClick={toggleColorMode}
          variant="ghost"
          aria-label="Toggle color mode"
          mr="3"
        >
        {colorMode === "light" ? "Dark" : "Light"}
        </Button>
        {/* <Button size="md" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Login with Twitter
        </Button> */}
        <Button onClick={onOpen} size='md'>
          Sign in
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='scale'>
        <ModalContent backdropFilter=''>
        <Button size="md" colorScheme="twitter" leftIcon={<FaTwitter />}>
          Login with Twitter
        </Button>

        <Button onClick={signInWithGoogle} mt={4} size="md" colorScheme={color} bg={bg} leftIcon={<FaGoogle />}>
          Login with Google
        </Button>
        </ModalContent>
        </Modal>
      </Flex>
    </Flex>
    <Text mx={8} fontSize="3xl" fontWeight="bold">liteBulb</Text>

    <Divider />

    <Flex height="50vh" alignItems="center">
      <Box mt='20' ml='20' >
        <Heading as="h1" size="xl" mb="4">
          Launch Your Next Idea 💡
        </Heading>
        <Text>
          With our platform, you can turn your ideas into a reality and build it for users
        </Text>
      </Box>
      <Image mt="44" ml='96' src="rocket.svg" alt="Rocket Illustration" boxSize="lg" />
    </Flex>

    
    <div className="featured">Featured Ideas</div>
    

<input className='inputt' type="text"  placeholder='Search ideas' onChange={event => {setQuery(event.target.value)}} />

    <Flex>
      {ideas.filter(idea => {
        if(query=== '') {
          return idea;
        } else if(idea.title.toLowerCase().includes(query.toLowerCase())) {
          return idea;
        }
      }).map((idea) => {
        return(
          <div className="cards" key={idea.id} >
                       <Paper
           elevation={4}
             sx={{
               ml: 5,
               width: 323,
               height: 350,
             }}
           >
          <span>{idea.title}</span>
          <p>{idea.description}</p>
          <div className="build-btn">Build</div>
          <div className="vouch-btn">Vouch</div>
    
           </Paper>
          
        </div>
      )})}
    {/* // <div className="cards">
    //   <span>A plarform for token gated scheduled booking.</span>
    //   <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    //   <div className="build-btn">Build</div>
    //   <div className="vouch-btn">Vouch</div>

    // </div>
    // <div className="cards2">
    // <span>A plarform for token gated scheduled booking.</span>
    //   <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    //   <div className="build-btn">Build</div>
    //   <div className="vouch-btn">Vouch</div>

    // </div>
    // <div className="cards3">
    // <span>A plarform for token gated scheduled booking.</span>
    //   <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    //   <div className="build-btn">Build</div>
    //   <div className="vouch-btn">Vouch</div>

    // </div>
    // <div className="cards4">
    // <span>A plarform for token gated scheduled booking.</span>
    //   <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    //   <div className="build-btn"> <span className="btn-text-1">Build</span> </div>
    //   <div className="vouch-btn">Vouch</div>

    // </div>
    </Flex>

    <div className="explore-ideas">Explore Ideas</div>
    
    <Flex>
    <div className="explore-cards">
      <span>A plarform for token gated scheduled booking.</span>
      <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    </div>
    <div className="explore-cards1">
    <span>A plarform for token gated scheduled booking.</span>
      <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    </div>
    </Flex>


    <Flex>
    <div className="explore-cards4">
    <span>A plarform for token gated scheduled booking.</span>
      <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    </div>
    <div className="explore-cards5">
    <span>A plarform for token gated scheduled booking.</span>
      <p>Admittedly, it is a surrogate experience, but so are love stories and travel novels. It is artificial, but not vulgar. And more importantly, it substantially changes Read more</p>
    </div> */}
    </Flex>

    

    
    
  
    </>
  );
};


export default Landing;

