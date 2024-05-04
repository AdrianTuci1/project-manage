import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>modern</span> Management <br /> app for teams.
          </Title>
          <Text c="dimmed" mt="md">
            Bucura-te de platforma complet functionala de management al echipelor. Poti sa adaugi proiecte
            si sa planifici fiecare proiect in parte, un plus pentru sefii de proiecte.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Editabil</b> – poti adauga proiecte si sa le atribui fiecarui angajat separat
            </List.Item>
            <List.Item>
              <b>Modern</b> – usor de folosit, reduce timpul de planificare
            </List.Item>
            <List.Item>
              <b>Gratuit</b> – oricine se poate inregistra si folosi platforma, ca admin sau utilizator
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} component={Link} to="/register">
              Register
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control} component={Link} to="/login">
              Login
            </Button>
          </Group>
        </div>
        <Image src="rocket.jpg" className={classes.image} />
      </div>
    </Container>
  );
}
