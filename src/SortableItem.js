import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";


export function SortableItem(props) {
    // props.id
    // JavaScript

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <>
            <div className="notsortable">not sortable thing?</div>
            <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div body className="m-3">{props.id}</div>
            </div>
        </>
    )
}