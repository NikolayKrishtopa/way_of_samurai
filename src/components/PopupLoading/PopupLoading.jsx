// import spinner from '../../pictures/spinner.gif'
import s from './PopupLoading.module.css';

export default function PopupLoading(props) {
  const { lang } = props;
  return (
    <div className={s.popup}>
      <img
        src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6e0b072897469.5bf6e79950d23.gif'
        alt='Идет загрузка'
        className={s.popup__spinner}
      />
      <p className={s.popup__text}>
        {lang === 'EN' ? 'loading...' : 'Загрузка...'}
      </p>
    </div>
  );
}
