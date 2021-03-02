import { format } from 'date-fns'
import { Date as PrismicDate } from 'prismic-reactjs'

export default function BlogDate(props) {
    const date = PrismicDate(props.dateString)
    return <time className="text-red-600" dateTime={props.dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
