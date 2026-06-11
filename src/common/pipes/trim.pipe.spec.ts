import { ArgumentMetadata } from '@nestjs/common';
import { TrimPipe } from './trim.pipe';

describe('TrimPipe', () => {
  const pipe = new TrimPipe();

  it('trims strings in plain body objects', () => {
    const metadata: ArgumentMetadata = { type: 'body' };

    expect(
      pipe.transform(
        {
          name: ' Alice ',
          nested: { email: ' alice@example.com ' },
          tags: [' one ', 'two '],
        },
        metadata,
      ),
    ).toEqual({
      name: 'Alice',
      nested: { email: 'alice@example.com' },
      tags: ['one', 'two'],
    });
  });

  it('does not transform custom decorator values', () => {
    const metadata: ArgumentMetadata = { type: 'custom' };
    const createdAt = new Date('2026-06-11T02:35:07.005Z');
    const user = { id: 'user-id', createdAt };

    expect(pipe.transform(user, metadata)).toBe(user);
    expect(user.createdAt).toBe(createdAt);
  });

  it('preserves non-plain objects nested in body objects', () => {
    const metadata: ArgumentMetadata = { type: 'body' };
    const createdAt = new Date('2026-06-11T02:35:07.005Z');

    const result = pipe.transform({ createdAt, name: ' Alice ' }, metadata);

    expect(result).toEqual({ createdAt, name: 'Alice' });
  });
});
