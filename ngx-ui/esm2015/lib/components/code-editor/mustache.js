import CodeMirror from 'codemirror';
// Adds mustache as an overlay to text/html
CodeMirror.defineMode('mustache', 
/* istanbul ignore next */ function (config, parserConfig) {
    const mustacheOverlay = {
        token(stream, _) {
            let ch;
            if (stream.match('{{')) {
                // eslint-disable-next-line no-cond-assign
                while ((ch = stream.next()) != null)
                    if (ch === '}' && stream.next() === '}') {
                        stream.eat('}');
                        return 'mustache';
                    }
            }
            while (stream.next() != null && !stream.match('{{', false)) {
                continue;
            }
            return null;
        }
    };
    return CodeMirror.overlayMode(CodeMirror.getMode(config, parserConfig.backdrop || 'text/html'), mustacheOverlay);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdGFjaGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi9jb21wb25lbnRzL2NvZGUtZWRpdG9yL211c3RhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sVUFBVSxNQUFNLFlBQVksQ0FBQztBQUVwQywyQ0FBMkM7QUFDM0MsVUFBVSxDQUFDLFVBQVUsQ0FDbkIsVUFBVTtBQUNWLDBCQUEwQixDQUFDLFVBQVUsTUFBVyxFQUFFLFlBQWlCO0lBQ2pFLE1BQU0sZUFBZSxHQUFHO1FBQ3RCLEtBQUssQ0FBQyxNQUFXLEVBQUUsQ0FBTTtZQUN2QixJQUFJLEVBQU8sQ0FBQztZQUNaLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsMENBQTBDO2dCQUMxQyxPQUFPLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLElBQUk7b0JBQ2pDLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFO3dCQUN2QyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNoQixPQUFPLFVBQVUsQ0FBQztxQkFDbkI7YUFDSjtZQUNELE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUMxRCxTQUFTO2FBQ1Y7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FDRixDQUFDO0lBQ0YsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDbkgsQ0FBQyxDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29kZU1pcnJvciBmcm9tICdjb2RlbWlycm9yJztcblxuLy8gQWRkcyBtdXN0YWNoZSBhcyBhbiBvdmVybGF5IHRvIHRleHQvaHRtbFxuQ29kZU1pcnJvci5kZWZpbmVNb2RlKFxuICAnbXVzdGFjaGUnLFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyBmdW5jdGlvbiAoY29uZmlnOiBhbnksIHBhcnNlckNvbmZpZzogYW55KSB7XG4gICAgY29uc3QgbXVzdGFjaGVPdmVybGF5ID0ge1xuICAgICAgdG9rZW4oc3RyZWFtOiBhbnksIF86IGFueSkge1xuICAgICAgICBsZXQgY2g6IGFueTtcbiAgICAgICAgaWYgKHN0cmVhbS5tYXRjaCgne3snKSkge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuICAgICAgICAgIHdoaWxlICgoY2ggPSBzdHJlYW0ubmV4dCgpKSAhPSBudWxsKVxuICAgICAgICAgICAgaWYgKGNoID09PSAnfScgJiYgc3RyZWFtLm5leHQoKSA9PT0gJ30nKSB7XG4gICAgICAgICAgICAgIHN0cmVhbS5lYXQoJ30nKTtcbiAgICAgICAgICAgICAgcmV0dXJuICdtdXN0YWNoZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHN0cmVhbS5uZXh0KCkgIT0gbnVsbCAmJiAhc3RyZWFtLm1hdGNoKCd7eycsIGZhbHNlKSkge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29kZU1pcnJvci5vdmVybGF5TW9kZShDb2RlTWlycm9yLmdldE1vZGUoY29uZmlnLCBwYXJzZXJDb25maWcuYmFja2Ryb3AgfHwgJ3RleHQvaHRtbCcpLCBtdXN0YWNoZU92ZXJsYXkpO1xuICB9XG4pO1xuIl19