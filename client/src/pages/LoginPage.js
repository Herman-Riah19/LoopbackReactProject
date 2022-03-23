import React, { useContext, useState } from 'react'
import style from '../style/jss/loginPage'
import { makeStyles } from '@mui/styles'
import { GridContainer, GridItem } from '../component'
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
} from '@mui/material'
import { signinUser, postUser } from '../service/UserService'
import { useHistory } from 'react-router-dom'

import { AuthContext } from '../security/context'

const useStyles = makeStyles(style)

const LoginPage = () => {
  const classes = useStyles()
  const history = useHistory()

  const context = useContext(AuthContext)

  const [haveAccount, setHaveAccount] = useState(true)

  const [error, setError] = useState({})

  const [name, setName] = useState("")
  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const login = (e) => {
    e.preventDefault()

    if(haveAccount) {
      const data = { email, password }
      if(data.email === '' && data.password === '') {
        return;
      }
      signinUser(data)
        .then(res => {
          context.login(res)
          history.push("/")
        })
        .catch(err => setError({
          err, 
          badEmail: "Please enter a correct email adress",
          badPass: "Please enter the correct password"}))
    } else {
      const data = {name, firstname, email, password}
      postUser(data)
        .then(res => {
          context.login(res)
          history.push("/")
        })
    }
  }

  const passwordEqual = (pass) => 
    pass !== password && (<span className={classes.badInput}>Your password is false. Please enter the exact password!</span>)

  return (
    <div>
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + require('../asset/image/banner-style.jpg').default + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
                {haveAccount ? (
                  <Card>
                    <form className={classes.form}>
                      <CardHeader
                        title="Sign in"
                        className={classes.cardHeader}
                        />
                      <CardContent>
                        <TextField
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          variant="outlined"
                          label="E-mail"
                          type ="email"
                          required
                          fullWidth
                          sx={{ mt: 2 }}
                          helperText={error.badEmail}/>
                        <TextField
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="outlined"
                          label="Password"
                          type ="password"
                          required
                          fullWidth
                          sx={{ mt: 2 }} 
                          helperText={error.badPass}/>
                          {passwordEqual(password)}
                        <Button fullWidth onClick={(e)=>setHaveAccount(false)}>
                          <span className={classes.newAccountBtn}>
                            Create a account
                          </span>
                        </Button>
                      </CardContent>
                      <CardActions className={classes.cardFooter}>
                        <Button
                          type ="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 0, mb: 2 }}
                          onClick={login}>
                            <span className={classes.submitBtn}>
                              Enter
                            </span>
                        </Button>
                      </CardActions>
                    </form>
                  </Card>
                ): (
                  <Card>
                    <form className={classes.form}>
                      <CardHeader
                        title="Sign up"
                        className={classes.cardHeader}
                        />
                      <CardContent>
                        <TextField
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          variant="outlined"
                          label="Name"
                          type ="text"
                          required
                          fullWidth
                          sx={{ mt: 2 }} />
                        <TextField
                          name="firstname"
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          variant="outlined"
                          label="Firstname"
                          type ="text"
                          required
                          fullWidth
                          sx={{ mt: 2 }} />
                        <TextField
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          variant="outlined"
                          label="E-mail"
                          type ="email"
                          required
                          fullWidth
                          sx={{ mt: 2 }} />
                        <TextField
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          variant="outlined"
                          label="Password"
                          type ="password"
                          required
                          fullWidth
                          sx={{ mt: 2 }} />
                        <TextField
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          variant="outlined"
                          label="Confirm Password"
                          type ="password"
                          required
                          fullWidth
                          sx={{ mt: 2 }} />
                          {passwordEqual(confirmPassword)}
                        <Button fullWidth onClick={(e)=>setHaveAccount(true)}>
                          <span className={classes.newAccountBtn}>
                           Have a account
                          </span>
                        </Button>
                      </CardContent>
                      <CardActions className={classes.cardFooter}>
                        <Button
                          type ="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                          onClick={login}>
                          <span className={classes.submitBtn}>
                              Enter
                          </span>
                        </Button>
                      </CardActions>
                    </form>
                  </Card>
                )}
              </GridItem>
            </GridContainer>

          </div>
      </div>
    </div >
  )
}

        export default LoginPage
