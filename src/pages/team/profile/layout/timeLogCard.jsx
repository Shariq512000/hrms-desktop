import DotsVerticalIcon from "../../../../component/icons/dots-vertical";

function wrapNumbers(str) {
    // Replace any sequence of digits in the string with <strong>{digits}</strong>
    // \d+ matches one or more digits (0-9)
    // Use React fragment/key if multiple numbers
    const parts = [];
    let lastIndex = 0;
    const regex = /\d+/g;
    let match;
    let i = 0;
    while ((match = regex.exec(str)) !== null) {
        const [num] = match;
        // push preceding text
        if (match.index > lastIndex) {
            parts.push(str.slice(lastIndex, match.index));
        }
        // push the number wrapped in <strong>
        parts.push(<strong key={i++}>{num}</strong>);
        lastIndex = regex.lastIndex;
    }
    // push rest text
    if (lastIndex < str.length) {
        parts.push(str.slice(lastIndex));
    }
    return parts;
}

export default function TimeLogCard({ date, clockIn, clockOut, total, segments }) {
    return (
        <div className="timelog-card card">
            <div className="tl-header">
                <div className="tl-header-date">{date}</div>

                <div className="tl-header-more">
                    <div className="tl-header-moreBtn"><DotsVerticalIcon /></div>
                </div>
            </div>

            <div className="tl-times">
                <div className="tl-times_item">
                    <span className="tl-label">Clock-In</span>
                    <span className="tl-time in">{clockIn}</span>
                </div>

                <div className="tl-times_item" style={{ textAlign: "right" }}>
                    <span className="tl-label clockout">Clock-Out</span>
                    <span className="tl-time out">{clockOut}</span>
                </div>
            </div>

            <div className="tl-body">
                <div className="tl-total">
                    <b>{wrapNumbers(total)}</b>
                </div>

                <div className="tl-bars">
                    {segments?.map((seg, i) => (
                        <div
                            key={i}
                            className="tl-bar"
                            style={{ background: seg?.color, width: seg?.width }}
                        />
                    ))}
                </div>

                <div className="tl-legend">
                    {segments?.map((seg, i) => (
                        <span key={i}>
                            <span className="tl-dot" style={{ background: seg?.color }} />
                            {seg?.label}
                        </span>
                    ))}
                </div>
            </div>

        </div>
    );
}