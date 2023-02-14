import React, { useEffect } from 'react'
import Searcher from '../Components/Searcher/Searcher'
import UserCard from '../Components/UserCard'
import PrincipalInformation from '../Components/PrincipalInformation'
import Description from '../Components/Description'
import LocationInformation from '../Components/Location'
import PaperInformation from '../Components/PaperInformation'
import { Container, CardMedia, Stack, Typography, Card } from '@mui/material'
import useGitSearch from '@/hooks/useGitSearch'

export default function Home () {
  const {
    inputUser,
    data,
    setInputUser,
    getUser
  } = useGitSearch()

  useEffect(() => {
    getUser(inputUser)
  }
  , [inputUser])

  const containerStyle = {
    background: 'whitesmoke',
    width: '80vw',
    height: 'auto',
    borderRadius: '16px',
    marginTop: '40px',
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  return (
    <Container sx={containerStyle}>
      <Searcher setInputUser={setInputUser} />
      <UserCard maxWidth='sm'>
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} sx={{ marginTop: '15px', marginBottom: '15px' }} alignItems='center'>
          <Card sx={{ maxWidth: '400px' }}>
            <CardMedia
              component='img'
              alt='Github User'
              image={data.avatar_url}
              sx={{
                maxWidth: '350px',
                borderRadius: '50%',
                objectFit: 'contain',
                margin: '10px'
              }}
            />
          </Card>
          <Stack direction='column' spacing={1} sx={{ marginTop: '30px', borderRadius: '16px' }}>
            <PrincipalInformation data={data} />
            <Description>
              <Stack justifyContent='center'>
                <Typography variant='body1'>
                  {data.bio || 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'}
                </Typography>
              </Stack>
              <PaperInformation data={data} />
              <LocationInformation data={data} />
            </Description>
          </Stack>
        </Stack>
      </UserCard>

    </Container>
  )
}
