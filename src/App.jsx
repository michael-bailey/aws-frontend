
import { Box, Toolbar, Button, IconButton, AppBar, Container } from '@mui/material'
import MainContent from './MainContent'
import './App.css'

function App() {

  return (
    <Container>
      <AppBar>
        <Toolbar
          variant="dense"
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            p: '8px 12px',
          }}
        >
          <Button
            variant="text"
            size="small"
            aria-label="Back to templates"

            component="a"
            href="/material-ui/getting-started/templates/"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            Back to templates
          </Button>
          <IconButton
            size="small"
            aria-label="Back to templates"
            component="a"
            href="/material-ui/getting-started/templates/"
            sx={{ display: { xs: 'auto', sm: 'none' } }}
          >

          </IconButton>

        </Toolbar>
      </AppBar>
      <Box>
        <MainContent />
      </Box>
    </Container>

    )
  }


export default App
