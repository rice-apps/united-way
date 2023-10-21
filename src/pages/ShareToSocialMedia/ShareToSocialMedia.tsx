import { FacebookShareButton, FacebookIcon } from 'react-share';
import { TwitterShareButton, TwitterIcon } from 'react-share';
// Facebook share button quote doesn't seem to work correctly - I might be misunderstanding
// what a quote is though
// twitter does not like the hashtag array - page won't load with it even though it's supposed to
function Share() {
        // let tags: Array<string>;
        // tags = ['#UnitedWay']; 

        return (
          <>
                <div>
                <FacebookShareButton
                        url={'https://unitedwayhouston.org/icj/'}
                        quote={'Check out united way!'}
                        hashtag="#UnitedWay"
                >
                        <FacebookIcon size={32} round />
                </FacebookShareButton>
                </div>
                <div>
                <TwitterShareButton
                        url={'Check out https://unitedwayhouston.org/icj/'}
                        // hashtags={tags}
                >
                        <TwitterIcon size={32} round />
                </TwitterShareButton>
                </div>
          </>
        );
      }
      
      export default Share;