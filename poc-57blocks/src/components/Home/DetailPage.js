import React from 'react';
import { useParams } from 'react-router-dom';
import { usePokemonDetail } from '../../hooks/usePokemonData';
import { Container, Grid, Card, CardContent, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import { Typography } from '@mui/material';


const DetailPage = () => {
    const { name } = useParams();
    const { data: pokemon, isLoading, isError } = usePokemonDetail(name);

    if (isLoading) {
        return <CircularProgress />;
    }

    if (isError) {
        return <div>Error: {isError.message}</div>;
    }

    if (!pokemon) {
        return <div>No data available</div>;
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h2" align="center" gutterBottom>{pokemon.name}</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} style={{ width: '100%' }} />
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Abilities:</Typography>
                            <List>
                                {pokemon.abilities.map((ability, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={ability.ability.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Types:</Typography>
                            <List>
                                {pokemon.types.map((type, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={type.type.name} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                    <Card sx={{ mt: 2 }}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Base Stats:</Typography>
                            <List>
                                {pokemon.stats.map((stat, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={`${stat.stat.name}: ${stat.base_stat}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetailPage;
