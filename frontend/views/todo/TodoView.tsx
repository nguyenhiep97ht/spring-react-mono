import * as cn from 'classnames';

export default function TodoView() {
  return (
    <div
      className={cn('flex', 'flex-col', 'h-full', 'items-center', 'justify-center', 'p-l', 'text-center', 'box-border')}
    >
      <img style={{ width: '200px' }} src="images/empty-plant.png" />
    </div>
  );
}
