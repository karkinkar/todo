import './Column.css';
import { Story } from './Story';

export function Column(prop: { background_color: string, column_header: string }) {
    return (
        <div id="column" style={{ backgroundColor : prop.background_color }}>
            <div style={{
                backgroundColor : '#a0ebe9',
                fontWeight: 700,
                fontFamily: 'sans-serif',
                fontSize: 'x-large',
                textAlign: 'center',
                margin: '2px',
                borderStyle: 'solid',
                borderWidth: '2px'
            }}>
                {prop.column_header}
            </div>
            <Story/>
        </div>
    );
}

