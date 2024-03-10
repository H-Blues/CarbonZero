import { Grid, Typography } from '@mui/material'
import Leaderboard from '../components/reputation/Board'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Reputation = () => {
  return (
    <>
      <Header />
      <Grid container sx={{ maxWidth: '1800px', height: 'fit-content', display: 'grid' }}>
        <Leaderboard />
      </Grid>
      <Footer />
    </>
  )
}

export default Reputation;