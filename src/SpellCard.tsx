import "core-js/library";
import * as React from 'react';
import { createStyles, WithStyles, withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Spell } from './compendium';

export interface Props extends WithStyles<typeof styles> {
  spell: Spell
}

const styles = createStyles({
  card: {
    width: 400,
    margin: '10px 20px',
    overflowY: 'auto',
  },
  media: {
    height: 140,
    backgroundPosition: 'center',
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
  },
  actionName: {
    fontWeight: 600,
  },
  h5InputParent: {
    width: '100%',
    marginBottom: '10px',
  },
  h5Input: {
    width: '100%',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: '1.5rem',
    fontWeight: 400,
    lineHeight: '1.33',
    letterSpacing: '0em',
    paddingTop: '3px',
    marginBottom: '2.4px',
    padding: '0',
  },
  table: {
    textAlign: 'center',
  },
  numberInputParent: {
    maxWidth: '2em',
    alignSelf: 'center',
  },
});

class SpellCard extends React.Component<Props> {

  private renderText(text: string[] | string) {
    if (!(text instanceof Array)) {
      text = [text];
    }
    return text.map((line, i) => <Typography key={i}>{line}</Typography>);
  }

  public render() {
    const { classes, spell } = this.props;
    return <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5">{spell.name}</Typography>
        <Typography>Level: {spell.level}</Typography>
        <Typography>Classes: {spell.classes}</Typography>
        <Typography>Time: {spell.time}</Typography>
        <Typography>Duration: {spell.duration}</Typography>
        <Typography>Range: {spell.range}</Typography>
        <Typography>Components: {spell.components}</Typography>
        <Typography>School: {spell.school}</Typography>
        {this.renderText(spell.text)}
      </CardContent>
    </Card>
  }
}

export default withStyles(styles)(SpellCard);