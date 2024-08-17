import type { IAuthor, IBook } from '../../types';
import { authors, books } from './data.ts';

const AuthorsListItem = ({ author }: { author: IAuthor }) => {
    const { name, age } = author;

    return (
        <p>
            Name: {name}, age: {age}
        </p>
    );
};
const BooksListItem = ({ book }: { book: IBook }) => {
    const { title, price } = book;

    return (
        <p>
            Title: {title}, price: {price}
        </p>
    );
};

const RegularList = ({
    items,
    sourceName,
    ItemComponent,
}: {
    items: Array<IAuthor | IBook>;
    sourceName: string;
    ItemComponent: React.ElementType;
}) => {
    return (
        <>
            {items &&
                items.map((item) => (
                    <ItemComponent key={item.id} {...{ [sourceName]: item }} />
                ))}
        </>
    );
};

export default function RegularListExample() {
    return (
        <>
            <div style={{ textDecoration: 'underline' }}>Authors:</div>
            <RegularList
                items={authors}
                sourceName='author'
                ItemComponent={AuthorsListItem}
            />
            <div style={{ textDecoration: 'underline' }}>Books:</div>
            <RegularList
                items={books}
                sourceName='book'
                ItemComponent={BooksListItem}
            />
        </>
    );
}
