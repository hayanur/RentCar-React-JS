import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from '../../styles/hero.module.css';

export default function hero() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
         Apa itu {' '}
          <Text component="span" inherit className={classes.highlight}>
            CAR RENT ?
          </Text>
        </Title>

        </div>
      </div>
  );
}