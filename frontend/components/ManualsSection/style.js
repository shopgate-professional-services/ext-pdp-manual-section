import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import { css } from 'glamor';

const container = css({
  background: '#F7F7F7',
  padding: '13px 16px',
}).toString();

const spacer = css({
  background: '#FFF',
  padding: '0px 0px 13px 0px',
}).toString();

const headline = css({
  fontSize: 16,
  fontWeight: 500,
}).toString();

const singleLink = css({
  color: themeConfig.colors.primary,
  paddingTop: 15,
}).toString();

const icon = css({
  fontSize: 20,
  overflow: 'visible',
  width: '0.75em',
  display: 'inline-block',
  verticalAlign: '-.125em',
  maxWidth: '100%',
  marginRight: '16px',
}).toString();

export default {
  container,
  spacer,
  headline,
  singleLink,
  icon,
};
