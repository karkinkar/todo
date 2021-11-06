import './Column.css';

export function Column(prop: { background_color: string }) {
    return (
        <div id="column" style={{ backgroundColor : prop.background_color }}>Column</div>
    );
}

