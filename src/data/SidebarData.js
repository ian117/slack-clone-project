import MessageIcon from '@material-ui/icons/Message';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MoreIcon from '@material-ui/icons/More';

export const sidebarItems = [
    {
        icon: <MessageIcon/>,
        text: "Thread",
    },
    {
        icon: <AllInboxIcon/>,
        text: "All DM´s",
    },
    {
        icon: <DraftsIcon/>,
        text: "Mentions & Reactions",
    },
    {
        icon: <BookmarksIcon/>,
        text: "Save Items",
    }, 
    {
        icon: <PeopleAltIcon/>,
        text: "People & Groups",
    },
    {
        icon: <MoreIcon/>,
        text: "More xD",
    }
]