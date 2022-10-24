import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';

const PostCard = () => {


    return (
        <Card sx={{ maxWidth: 230 }}>
            <CardHead>
                <CardHeader className='cardH'
                    avatar={
                        <Avatar aria-label="recipe">
                        </Avatar>
                    }
                    title="국내여행 / 해외여행"
                />

                <CardMedia
                    component="img"
                    height="100"
                    image="/static/images/cards/paella.jpg"
                    alt="이미지 들어갈 곳"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <p>🛫나만의 여행 필수품</p>
                    </Typography>
                </CardContent>
                <CardActions className="cardF" disableSpacing>
                    <IconButton color='error' aria-label="add to favorites">
                        <FavoriteIcon /> 10
                    </IconButton>
                </CardActions>
            </CardHead>
        </Card>
    );
}
export default PostCard

const CardHead = styled.div`
    p{
        font-size:18px;
    }
    .cardH{
        background-color: #293991;
        height: 6rem;
    }
    .cardF{
        background-color: #293991;
        height: 4rem;
    }
`









// import React from 'react'

// const PostCard = () => {
//     return (
//         <div>PostCard</div>
//     )
// }

// export default PostCard