import { NavLink } from 'react-router-dom';
const s = require('./Dialog.module.css');

export type DialogPropsType = {
  name: string;
  id: number;
  onSwitchCompanionId: (id: number) => void;
};

export default function Dialog(props: DialogPropsType) {
  const { name, id, onSwitchCompanionId } = props;

  return (
    <NavLink
      to={`/messages/${id}`}
      className={s.dialog}
      onClick={() => onSwitchCompanionId(id)}
    >
      {name}
    </NavLink>
  );
}
