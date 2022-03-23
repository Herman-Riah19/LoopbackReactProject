import React from 'react';
import { GridContainer, GridItem } from '..'
import classNames from 'classnames'
import { Card, CardContent, CardActions, CardHeader, TextField, Button } from '@mui/material'
import style from '../../style/jss/component/editProfileStyle.js'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';

const useStyle = makeStyles(style)

const Input = styled('input')({
  display: 'none',
});

const EditProfile = ({ user, setUser, handleChange }) => {
  const classes = useStyle()

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <GridContainer spacing={2}>
        <GridItem sx={{ margin: '-10px' }} xs={6} sm={12} md={4}>
          <div className={classes.spaceImage}>
            <img src={user.profile} alt='...' className={imageClasses} />
          </div>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" value={user.profile} />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </GridItem>
        <GridItem sx={{ marginLeft: '-100px' }} xs={8} sm={12} md={8}>
          <Card>
            <form className={classes.form}>
              <CardHeader
                title="Edit your profile account"
                className={classes.cardHeader}
              />
              <CardContent>
                <TextField
                  name="name"
                  value={user.name}
                  onChange={(e) => setUser({ name: e.target.value })}
                  label="Name"
                  type="text"
                  required
                  fullWidth
                  sx={{ mt: 2 }} />
                <TextField
                  name="firstname"
                  value={user.firstname}
                  onChange={(e) => setUser({ firstname: e.target.value })}
                  variant="outlined"
                  label="Firstname"
                  type="text"
                  required
                  fullWidth
                  sx={{ mt: 2 }} />
                <TextField
                  name="email"
                  value={user.email}
                  onChange={(e) => setUser({ email: e.target.value })}
                  variant="outlined"
                  label="E-mail"
                  type="email"
                  required
                  fullWidth
                  sx={{ mt: 2 }} />
                <TextField
                  name="description"
                  value={user.description}
                  onChange={(e) => setUser({ description: e.target.value })}
                  variant="outlined"
                  label="description"
                  multiline
                  required
                  fullWidth
                  sx={{ mt: 2 }} />
              </CardContent>
              <CardActions className={classes.cardFooter}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleChange}>
                  <span className={classes.submitBtn}>
                    Enter
                  </span>
                </Button>
              </CardActions>
            </form>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default EditProfile;
