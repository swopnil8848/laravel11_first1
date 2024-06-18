// apperance customization to improve readability

const datk = '#3e3c38';
export const config = {
    axis: {
        domain: false, // Disable axis lines (domains)
        tickColor: 'lightGray',
        grid: false, // Remove grid lines
        ticks: false, // Remove ticks if desired
        labels: {
            fontSize: 20,
            fill: "#000000"
        },
        title: {
            fontSize: 30,
            fill: "#000000",
            labelLimit: 0
        }
    },
    view: {
        strokeWidth: null, // Remove chart border
        stroke: null // Remove chart border
    },
    background: null // Set the background to be transparent
};