# -*- coding: utf-8 -*-
from CrawlingCategory.CrawlingUtil import CrawUtil
import re

class PaintingCategory:

    crawlingUtil = CrawUtil()

    def __init__(self, pageNum, rootPath):

        path = rootPath + '/PaintCategory'
        URL = 'https://bbs.ruliweb.com/hobby/board/300066?page=' + str(pageNum)
        links = self.crawlingUtil.paint_get_link(URL)
        fileNum = self.crawlingUtil.isInDirectory(path)
        p = 0
        print(links)

        for count in range(len(links)):
            result_text = self.crawlingUtil.paint_get_text(links[count])
            #result_text = result_text[19:]
            result_text = re.sub("[-=+,#/\?:%$.@*\"※~&%!r\\'|\(\)\[\]\<\>`\'\\\\n\\\\t{}◀▶▲☞“”ⓒ◇]", "", result_text)
            result_text = result_text.replace('xa0','')
            result_text = result_text.replace('u200b', '')

            p = 0

            if result_text.strip() == '':
                p += 1
            else:
                OUTPUT_FILE_NAME = 'PaintCategory/PaintCategory%05d.txt' % (count + fileNum - p)
                print(OUTPUT_FILE_NAME)
                open_output_file = open(OUTPUT_FILE_NAME, 'w', -1, "utf-8")
                open_output_file.write(result_text)
                open_output_file.close()


