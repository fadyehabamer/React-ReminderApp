import { render, screen, fireEvent, within } from '@testing-library/react';
import App from './App';

const rows = () => screen.getAllByRole('row').slice(1); // skip header row

const fillAndSubmit = (name, days) => {
  fireEvent.change(screen.getByLabelText('Reminder name'), { target: { value: name } });
  fireEvent.change(screen.getByLabelText('Days left'), { target: { value: days } });
  fireEvent.submit(screen.getByRole('button', { name: 'Add' }).closest('form'));
};

test('renders the seed reminders', () => {
  render(<App />);
  expect(rows()).toHaveLength(3);
  expect(screen.getByText('Study React')).toBeInTheDocument();
});

test('adds a reminder, trims the name and clears the form', () => {
  render(<App />);
  fillAndSubmit('  Buy milk  ', '5');
  const last = rows()[rows().length - 1];
  expect(within(last).getByText('Buy milk')).toBeInTheDocument();
  expect(within(last).getByText('5')).toBeInTheDocument();
  expect(screen.getByLabelText('Reminder name')).toHaveValue('');
  expect(screen.getByLabelText('Days left')).toHaveValue(null);
});

test('ignores blank names and non-positive day counts', () => {
  render(<App />);
  fillAndSubmit('   ', '3');
  fillAndSubmit('Something', '0');
  expect(rows()).toHaveLength(3);
});

test('gives every added reminder a unique id', () => {
  render(<App />);
  for (let i = 0; i < 20; i++) fillAndSubmit(`Task ${i}`, '1');
  const ids = rows().map((row) => within(row).getAllByRole('cell')[0].textContent.trim());
  expect(new Set(ids).size).toBe(ids.length);
});

test('delete button removes only that reminder and shows empty state', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Delete Study OOP' }));
  expect(screen.queryByText('Study OOP')).not.toBeInTheDocument();
  expect(rows()).toHaveLength(2);
  fireEvent.click(screen.getByRole('button', { name: 'Delete Study React' }));
  fireEvent.click(screen.getByRole('button', { name: 'Delete Grad. Project' }));
  expect(screen.getByText('No Items to Show')).toBeInTheDocument();
});
